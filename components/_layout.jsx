import Header from "./header"

export default function _layout({children}) {
  return (
    <>
        <Header/>
        <main className=" bg-gradient-to-tr from-blue-500 " >{children}</main>
    </>
  )
}
