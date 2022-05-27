import Header from "./header"

export default function _layout({children}) {
  return (
    <>
        <Header/>
        <main>{children}</main>
    </>
  )
}
