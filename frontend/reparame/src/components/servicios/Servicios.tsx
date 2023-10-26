'use client'
import React from 'react'
import { CardServicio } from './cardServicio/CardServicio'
import { useEffect, useState } from 'react'
import { getServicios, postLogin } from '@/utils/requestServicios/getServicios'
import DetalleServicio from './detalleServicio/DetalleServicio'
import { useAppSelector } from '@/utils/globalStates/hooks'
import Skeleton from '../loadingSpinner/Skeleton'
import HeaderManager from '../headerManager/HeaderManager'

const Servicios = () => {
    const [servicios, setServicios] = useState([])
    const id = useAppSelector(state => state.servicios.value)
    useEffect(() => {
        getServicios(setServicios, id)
    }, [id])

    return (
        <section className='flex flex-col max-w-max-view w-full gap-12'>
            <HeaderManager page='servicios' />
            {servicios[0] || servicios.length === undefined
                ? servicios.length > 0 ?
                    <article className='flex flex-col gap-12'>
                        <h1 className='text-2xl'>Aca va la lista de proveedores</h1>
                        {servicios.map((res: any) => (
                            <CardServicio key={res.id_Servicio} servicio={res} />
                        ))}
                    </article>
                    : <DetalleServicio servicio={servicios} />
                : <><Skeleton /><Skeleton /><Skeleton /></>}

        </section>
    );
};

export default Servicios;