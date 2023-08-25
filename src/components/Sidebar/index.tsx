import * as S from "./styles"

export function Sidebar(){
    return(
        <S.Sidebar>
            <S.SidebarItem className="item1">Culinaria</S.SidebarItem>
            <S.SidebarItem className="item2">
                <a href="/home">Tópicos</a>
            </S.SidebarItem>
            <S.SidebarItem className="item3">
                <a href="/list">Descrição</a>
            </S.SidebarItem>
        </S.Sidebar>

    )
}