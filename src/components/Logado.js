import { useNavigate } from "react-router-dom";
import Topo from './comuns/Topo';
import Menu from './comuns/Menu';
import styled from "styled-components";

export default function Logado({children}) {
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem('trackit'));

    // const tempoLogado = new Date() - autenticador.horario;
    // console.log(tempoLogado)

    function erroAutenticador() {
        alert('Não autorizado, favor refazer o login');
        localStorage.clear('trackit')
        navigate('/');
    }

    if (usuario.token) {
        return (
            <Container>
                <Topo />
                <Wrapper >
                    {children}
                </Wrapper>
                <Menu />
            </Container>
        );
    } else {
        erroAutenticador();
    }
}

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #e5e5e5;
`;

const Wrapper = styled.div`
    padding: 70px 0;
`;