import React, {useEffect, useState} from 'react';

import CarForm from "./CarForm";
import Cars from "./Cars";
import {ICar} from "../../interfaces/carInterface";
import {apiService} from "../../services/apiService";
import {carService} from "../../services/carService";



const CarContainer = () => {
    const [cars, setCars] = useState<ICar[]>([])

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    })

    return (
        <div>
            <CarForm />
            <hr />
            <Cars />
            
        </div>
    );
};

export default CarContainer;