import { Title as TitleStyle } from './styles'

export type Props = {
  children: string
  fontSize?: number
  textAlign?: 'center' | 0
}
const Title = (props: Props) => (
  <TitleStyle textAlign={props.textAlign} fontSize={props.fontSize}>
    {props.children}
  </TitleStyle>
)

export default Title
