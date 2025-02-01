import React from 'react';

function ServiceCard1({variant}) {
    return (
        <div className="md:flex md:flex-col gap-5 px-5 py-4 bg-[#F07167] bg-opacity-30 rounded-2xl">
            <div className="card">
                <h2 className="text-2xl font-bold text-left mb-4">Développement Web et Mobile sur
                    mesure</h2>
                <p className="text-left text-base">
                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-2">
                                        <span
                                            className="flex justify-center items-center font-bold text-white h-6 p-2 w-6 md:h-10 md:w-10 rounded-full bg-red-900">1</span>
                            Nous créons des sites professionnels et optimisés pour présenter votre
                            activité
                            ou votre entreprise
                        </li>
                        <li className="flex gap-2">
                                        <span
                                            className="flex justify-center items-center font-bold text-white h-6 p-2 w-6 md:h-10 md:w-10 rounded-full bg-red-900">2</span>
                            Création d'application web personnalisée, gestion de boutique, gestion de
                            stock,
                            gestion de restaurant etc....
                        </li>
                        <li className="flex justify-start gap-2">
                                        <span
                                            className="flex justify-center items-center font-bold text-white h-6 p-2 w-6 md:h-10 md:w-10 rounded-full bg-red-900">1</span>
                            Création d'application IOS & Android
                        </li>
                    </ul>
                </p>
            </div>
            <div className="mt-4 md:h-52 md:w-full mx-auto">
                <img className="rounded-2xl w-full h-full object-cover aspect-square"
                     src="../src/assets/images/dev-mark.jpg" alt=""/>
            </div>
        </div>
    );
}

export default ServiceCard1;