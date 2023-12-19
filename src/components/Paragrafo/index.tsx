import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
  textAlign?: 'center' | 0
}
const Paragrafo = ({
  children,
  tipo = 'principal',
  fontSize,
  textAlign
}: Props) => (
  <P fontSize={fontSize} textAlign={textAlign} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
