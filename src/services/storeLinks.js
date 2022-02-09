import { toast } from "react-toastify";

// Buscar links salvos
export async function getLinksSave(key){
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

// Salvar links no storage
export async function saveLink(key, newLink){
  let linksStored = await getLinksSave(key);

  const hasLink = linksStored.some( link => link.id === newLink.id);

  if(hasLink){
    toast.info('O link já existe na sua lista, copie-o abaixo 👇');
    return;
  }

  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  toast.success('Link salvo com sucesso!');
}

// Deleter algum link salvo
export function deleteLink(links, id){
  let myLinks = links.filter(item => item.id !== id);

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));

  return myLinks;
}