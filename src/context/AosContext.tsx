import {createContext, useEffect} from "react";
import AOS from "aos";

interface AOSContextType {
    refreshAOS: () => void;
}

const AOSContext = createContext<AOSContextType | undefined>(undefined);
const AOSProvider = ({children}: any) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, once: true,
            easing: 'ease-in-out',
        });
    }, []);
    const refreshAOS = () => {
        AOS.refresh();
    };
    return (
        <AOSContext.Provider value={{refreshAOS}}>
            {children}
        </AOSContext.Provider>
    );
};

export {AOSProvider, AOSContext};