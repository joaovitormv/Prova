import React from "react"
import { Outlet } from "react-router-dom"
import { ComponentHeader } from "../../components"
import { ComponentSidebar } from "../../components"


import * as S from "./styles"



export function Layout() {
  return (
    <>
      <ComponentHeader />
        
        <S.Main>
        <ComponentSidebar />
          <Outlet />
        </S.Main>

    </>
  )
}
