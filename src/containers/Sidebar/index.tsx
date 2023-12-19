import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { Descricao, ButtonTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title textAlign={'center'} fontSize={20}>
        Ramon Rodrigo
      </Title>
      <Paragrafo textAlign={'center'} tipo="secundario" fontSize={16}>
        ramonrpro
      </Paragrafo>
      <Descricao fontSize={12} tipo="principal" textAlign={'center'}>
        Engenheiro front-end
      </Descricao>
      <ButtonTema>Trocar tema</ButtonTema>
    </SidebarContainer>
  </aside>
)
export default Sidebar
