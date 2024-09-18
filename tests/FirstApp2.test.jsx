import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en componente firstapp', () => {
    
    const title = 'Hola mi gente!';
    const subtitle = 'Soy le mejor subtitulo';

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "hola mi gente"', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();
        //screen.debug();
    });

    test('debe mostrar el titul en un h1', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={title} subtitle={subtitle}/>);
        expect(screen.getAllByText(subtitle).length).toBe(2);
    });

});