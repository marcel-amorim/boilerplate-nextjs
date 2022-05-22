import S from './styles'

export interface MainProps {
  title?: string
  description?: string
}

const Main: React.FC<MainProps> = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
        width={250}
        height={55}
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
        width={300}
        height={263}
      />
    </S.Wrapper>
  )
}

export default Main
