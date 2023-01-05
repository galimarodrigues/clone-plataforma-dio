import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

import { ButtonRegister } from '../../components/ButtonRegister';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { api } from '../../services/api';
import { IFormData } from "./types";

import { Column, Container, Row, SubtitleLogin, TermosDeUso, Title, TitleLogin, Wrapper, TenhoConta } from './styles';


const schema = yup.object({
    email: yup.string().email('Email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Register = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/Login')
    }

    const {control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            } else {
                alert('Email ou senha inválido')
            }
        }catch{
            alert('Houve um erro, tente novamente')
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="nome" errorMessage={errors?.nome?.message} placeholder="Nome Completo" leftIcon={<MdEmail />} control={control} />
                    <Input name="email" errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} control={control} />
                    <Input name="password" placeholder="Senha" type="password" errorMessage={errors?.password?.message} leftIcon={<MdLock />}  control={control} />
                    <Button title="Criar minha conta" variant="secondary" type="submit" />
                </form>
                <TermosDeUso>Ao clicar em "Criar minha conta", declaro que aceito as Políticas de Privacidade
                        e os Termos de Uso da DIO.
                </TermosDeUso>
                <Row>
                    <TenhoConta>Já tenho conta.</TenhoConta>
                    <ButtonRegister title="Fazer login" variant="secondary" onClick={handleClickSignIn} />
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register };
