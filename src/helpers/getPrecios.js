export const getYear= (year)=>{
    return new Date().getFullYear()-year;
}

export const getMarca= (marca)=>{
    let incremento;

        switch (marca) {
            case 'americano':
                incremento=1.15;
               break
            case 'europeo':
                incremento=1.30;
               break 
            case 'asiatico':
                incremento=1.05;
                break
            default:
               break;
        }

        return incremento;
}

export const getPlan= (plan)=>{
        return (plan==='basico') ? 1.20 :1.50;
}
export const primerMayuscula = (texto)=>{
    return texto.charAt(0).toUpperCase()+texto.slice(1);
}