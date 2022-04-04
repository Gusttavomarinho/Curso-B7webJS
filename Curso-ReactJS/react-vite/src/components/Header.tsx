type Props = {
  title: string;
  version?: string;
}

export const Header = ({title,version}: Props) => {
  return(
    <header>
      <h1>{title} - {version}</h1>
      <hr />
    </header>
  )
}