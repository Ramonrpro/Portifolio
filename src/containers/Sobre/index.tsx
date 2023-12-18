import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSection } from './styles'
const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragrafo tipo="principal">
      Eu sou lindo, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
      non mollitia. Eum, unde? Voluptatibus, accusamus ad numquam reprehenderit
      architecto vero veritatis sapiente soluta dolore excepturi eveniet eos
      corporis, officiis magnam.
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=Ramonrpro&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ramonrpro&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
