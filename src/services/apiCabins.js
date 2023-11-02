import { supabase, supabaseUrl } from './supabase.js';

export const getCabins = async () => {
  const { data, error } = await supabase.from('cabins').select('*');
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  return data;
};

//Create Cabin

export const createCabin = async (newCabin) => {
  //image upload
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1 create cabin
  const { data, error } = await supabase.from('cabins').insert([{ ...newCabin, image: imagePath }]);
  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }
  //2. upload image

  const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image, {
    cacheControl: '3600',
    upsert: false,
  });

  //3. return cabin data
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error('Cabin image could not be uploaded');
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);
  if (error) {
    console.error('Cabin could not be deleted');
    throw new Error('Cabin could not be deleted');
  }
  return data;
};
