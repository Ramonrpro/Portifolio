import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  //Colocando interrogação no final da declaração ela se torna opcional
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  padding: 8px 16px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Enviar
      </Botao>
      <br />
      <br />
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>{' '}
      <br />
      <br />
      <BotaoPerigo as="a" principal>
        <span>Não clique</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
