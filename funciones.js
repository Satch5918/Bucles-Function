// 1-  Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)


/* const cervezas = (array,abv) => {
    let filtrosDeCervezas = [];

    for (let cervezas of array){
        if(cervezas.abv <= abv){
            filtrosDeCervezas.push(
            {
                name: cervezas.name,
                abv: cervezas.abv,
                ibu: cervezas.ibu,
            });
        }
    }
    return filtrosDeCervezas;
}
console.log(cervezas(beers,6));
 */

//------------------------*-*-*-*-*------------------------------//

// 2-  Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas más alcohólicas


/* const cervezas = arrayDeCervezas => { 
    filtrosDeCervezasMax = [];
    filtrosDeCervezasMax = arrayDeCervezas.sort((a, b) => b.abv - a.abv);

    return filtrosDeCervezasMax.slice(0, 10);
}

console.log(cervezas(beers));
 */


//------------------------*-*-*-*-*------------------------------//



// 3-  Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas


/* const cervezas = arrayDeCervezas => { 
    filtrosDeCervezasMin = [];
    filtrosDeCervezasMin = arrayDeCervezas.sort((a,b) =>  a.ibu -  b.ibu);
    return filtrosDeCervezasMin.slice(0, 10);
}
console.log(cervezas(beers)); */


//------------------------*-*-*-*-*------------------------------//


// 4-  Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true o descendente si es false.



//------------------------*-*-*-*-*------------------------------//



// 5-  Generar una función que reciba como parámetro un array de cervezas y un id. La función debe renderizar (renderear, dibujar, pintar, llenar, etc) en un  archivo html una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. Cada fila debe tener los datos que se piden  de cada una de las cervezas.

const tbody = document.getElementById('tbody');

const fragment = document.createDocumentFragment();

cervezas = arraysDeCervezas => {
    
    for (let cervezas of arraysDeCervezas){
        let div = document.createElement('tr');
        div.innerHTML = `<td>${cervezas.name}</td>
        <td>${cervezas.abv}</td>
        <td>${cervezas.ibu}</td>`;

        fragment.appendChild(div);        
}
tbody.appendChild(fragment);
}

cervezas(beers);

