"use client";

import { useState } from "react";
import { galeria } from "@/data/galeria";
import SectionTitle from "./SectionTitle";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function GaleriaSection() {
    const [imagenSeleccionada, setImagenSeleccionada] = useState<number | null>(
        null
    );

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <SectionTitle
                    titulo="Nuestros Trabajos"
                    subtitulo="Conoce algunos resultados realizados en Marylizz Bella Estilo."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galeria.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => setImagenSeleccionada(index)}
                            className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer"
                        >
                            <img
                                src={item.imagen}
                                alt={item.categoria}
                                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition duration-300" />

                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <span className="inline-block bg-pink-600 text-white px-4 py-2 rounded-full font-semibold">
                                    {item.categoria}
                                </span>

                                <p className="text-white font-semibold mt-2 opacity-0 group-hover:opacity-100 transition">
                                    {item.titulo}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {imagenSeleccionada !== null && (
                    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-6">
                        <button
                            onClick={() => setImagenSeleccionada(null)}
                            className="absolute top-6 right-6 text-white text-3xl hover:text-pink-500 transition"
                        >
                            <FaTimes />
                        </button>

                        <button
                            onClick={() =>
                                setImagenSeleccionada(
                                    imagenSeleccionada === 0
                                        ? galeria.length - 1
                                        : imagenSeleccionada - 1
                                )
                            }
                            className="absolute left-6 text-white text-4xl hover:text-pink-500 transition"
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            onClick={() =>
                                setImagenSeleccionada(
                                    imagenSeleccionada === galeria.length - 1
                                        ? 0
                                        : imagenSeleccionada + 1
                                )
                            }
                            className="absolute right-6 text-white text-4xl hover:text-pink-500 transition"
                        >
                            <FaChevronRight />
                        </button>

                        <img
                            src={galeria[imagenSeleccionada].imagen}
                            alt={galeria[imagenSeleccionada].categoria}
                            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}