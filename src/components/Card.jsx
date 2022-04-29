import React, { useState,useEffect } from "react";

const Card = () => {
  const [poke, setPoke] = useState({ name: "" });
  const [id, setId] = useState(26)
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      console.log(data)
      let pokemon = {
        name: data.name,
        img: data.sprites.other.dream_world.front_default,
        experience: data.base_experience,
        hp : data.stats[0].base_stat,
        attack : data.stats[1].base_stat,
        special : data.stats[3].base_stat,
        defense : data.stats[2].base_stat,
      }
      setPoke(pokemon);
    };
    getData();
  }, [id]);
  // console.log(poke)
  const aumentarId = () => {
    setId(id + 1)
  }
  const disminuirId = () => {
    setId(id - 1)
  }
  return (
    <>
    <div className="w-100 pt-8 mb-4 ">
    <div className="min-w-max bg-slate-400 md:w-1/3 w-80  mx-auto text-center rounded-lg pb-4 overflow-hidden relative shadow-2xl">
      <div className="bg-red-400 h-40 absolute w-full">  
      </div>
      <div className=" mx-auto h-52 w-52 p-4 bg-white rounded-full overflow-hidden relative mt-4 flex justify-center items-center">
        <img src={poke.img} alt=""/>
      </div>
      <div className="space-y-1 p-3">
        <div className="font-medium uppercase">{poke.name} <span>{poke.experience} Xp   </span></div>
        <div>ID : {id}</div>
        <div>{poke.hp} Hp</div>
      </div>
      <div className="">
        <div className="p-3 grid grid-cols-1 sm:grid-cols-3 gap-5 pb-0  text-white">
          <div className="bg-red-400 rounded-md  p-3 flex flex-col "><span>Especial</span> {poke.special}</div>
          <div className="bg-red-400 rounded-md p-3 flex flex-col"><span>Defensa</span> {poke.defense}</div>
          <div className="bg-red-400 rounded-md  p-3 flex flex-col"><span>Ataque</span> {poke.attack}</div>
        </div>
      </div>
      <div className="space-x-4">
      <button className="w-24 p-3 bg-black text-white rounded-lg mt-4 font-semibold" onClick={disminuirId}>Atras</button>
      <button className="w-24 p-3 bg-black text-white rounded-lg mt-4 font-semibold" onClick={aumentarId}>Siguiente</button>
      </div>
    </div>
  </div>
 
    </>
  
  );
};

export default Card;
