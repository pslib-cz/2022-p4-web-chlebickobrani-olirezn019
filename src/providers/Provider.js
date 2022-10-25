import {createContext, useReducer, useEffect} from "react";

function generateTables(tables_count, people_count) {
    let tables = [];
    for (let i = 0; i < tables_count; i++) {
        tables.push([]);
        for (let j = 0; j < people_count; j++) {
            tables[i].push(0);
        }
    }
    return tables;
}

const t = generateTables(5, 4);

const LOCAL_STORAGE_ID = "localstorageid35EF4C";
export const CLEAR = "CLEAR";
export const RESET = "RESET";
export const SETTABLES = "SETTABLES";
export const INCCOUNT = "INCREMENTCOUNT";

const copyMultidimensionalArray = arr => JSON.parse(JSON.stringify(arr));

const initialData = {count: 0, tables: t};

let storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID));

const dataReducer = (state, action) => {
    switch (action.type) {
        case CLEAR: {
            let oldTables = state.tables;
            let table_count, people_at_table;

            if (action.payload == undefined) {
                table_count = oldTables.length;
                people_at_table = oldTables[0].length;
            }
            else {
                table_count = action.payload.table_count;
                people_at_table = action.payload.chair_count;
            }

            return {...state, tables: generateTables(table_count, people_at_table), count: 0};
        }
        case RESET: {
            return initialData;
        }
        case SETTABLES: {
            return {...state, tables: action.payload};
        }
        case INCCOUNT: {
            state.count++;
            return state;
        }
        default: {
            return state;
        }
    }
}

export const Context = createContext();

export const Provider = ({children, ...rest}) => {
    const [store, dispatch] = useReducer(dataReducer, storedData || initialData);
    useEffect(()=> {
        localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(store));
    },[store])
    return (
        <Context.Provider value={[store, dispatch]}>
            {children}
        </Context.Provider>
    );
}