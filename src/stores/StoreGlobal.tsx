export const STORE_WORKER = "store_worker";

interface StoreStateGeneral {
    
    
}

const initialState: StoreStateGeneral = {
    
} 
    
export function save(idscreen: any){
    var accion = {
        type: STORE_WORKER,
        valor: idscreen,
        hasDoneLogout: idscreen == null
    };
    return accion;
}

export function StoreGlobal(state: StoreStateGeneral = initialState, action: any) {
    
}
