import { createContext, memo, PropsWithChildren, useContext, useState } from "react"
import { language } from "./languages";

type Language = keyof typeof language;
const LanguageContext = createContext<Language>('en');

export const ExampleUseContext = () => {
    const [lang, setLang] = useState<Language>('en');

    return (<div  style={{backgroundColor: 'green', padding: 3}}>
        {Object.keys(language).map((item) => <button onClick={() => setLang(item as Language)}>{item}</button>)}
        <LanguageContext.Provider value={lang}>
            <Component1>
                <Component2>
                    <Component3></Component3>
                </Component2>
            </Component1>
        </LanguageContext.Provider>
    </div>)
}

const Component1 = (props: PropsWithChildren) => {
    console.log("Component1 ri-rendering");
    return <div style={{backgroundColor: 'red', padding: 3}}>{props.children}</div>
}

const Component2 = memo((props: PropsWithChildren) => {
    console.log("Component2 ri-rendering");
    const lang = useContext(LanguageContext);
    return <div style={{backgroundColor: 'blue', color: 'white', padding: 3}}>
        <p>{language[lang].hello}</p>
        {props.children}
        </div>
})

const Component3 = () => {
    console.log("Component3 ri-rendering");
    const lang = useContext(LanguageContext);
    return <div style={{backgroundColor: 'yellow', color: 'black', padding: 3}}>{language[lang].welcome}</div>
}