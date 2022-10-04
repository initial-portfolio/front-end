import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
export const MessageFeedback = styled.p`
  margin-top: 20px;
  font-family: Montserrat, sans-serif;
  color: white;
  padding: 1rem;
  border-radius: 0.2rem;
  text-align: center;
  font-weight: bold;
  background-color: #86cd82;
`;

type formProps = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export const Form = () => {
  const [messageSend, setMessageSend] = useState(false);
  const [data, setData] = useState<formProps>({
    name: '',
    email: '',
    message: '',
    phoneNumber: '',
  });
  const handleChange = (e) => {
    // eslint-disable-next-line prefer-const
    let { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    axios
      .post(`https://message-ganashy-api.herokuapp.com/sending-email`, data)
      .then(() => setMessageSend(true))
      .then(() => setTimeout(() => setMessageSend(false), 5000));
  };
  return (
    <>
      <form onSubmit={handleSendMessage}>
        <div>
          <label id={'name'}>Nome</label>
          <input
            type={'text'}
            name={'name'}
            placeholder="Digite seu nome"
            onChange={handleChange}
          />
        </div>
        <div>
          <label id={'Telefone'}>Telefone</label>
          <input
            type={'text'}
            placeholder="Digite seu telefone"
            name={'phoneNumber'}
            onChange={handleChange}
          />
        </div>
        <div>
          <label id={'email'}>Email</label>
          <input
            type={'text'}
            placeholder="Digite seu melhor email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label id={'mensagem'}>Mensagem</label>
          <textarea
            placeholder="Digite a sua mensagem"
            name={'message'}
            onChange={handleChange}
          />
        </div>
        <button type={'submit'}>Enviar</button>
      </form>
      {messageSend && (
        <MessageFeedback>
          Nos recebemos sua mensagem! Aguarde nosso retorno 😀
        </MessageFeedback>
      )}
    </>
  );
};
