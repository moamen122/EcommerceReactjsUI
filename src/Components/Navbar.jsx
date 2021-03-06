import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
const Container = styled.div`
height :60px ;
${mobile({ height: "50px" })}

`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex ;
justify-content: space-between;
align-items: center;
${mobile({ padding: "10px 0px" })}

`;
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;
const Language = styled.span`
font-size:14px ;
cursor: pointer;
${mobile({ display: "none" })}

`;
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-Left: 25px;
padding: 5px


`;
const Input = styled.input`
border:none;
${mobile({ width: "50px" })}

`;
const Center = styled.div`
flex:1;
text-align: center;
`;
const Logo = styled.h1`
font-weight: bold;
${mobile({ font: "24px" })}


`;
const Right = styled.div`
flex:1;
display : flex;
align-items: center;
justify-content: flex-end;
${mobile({ felx: 2, justifyContent: "center" })}


`;
const MenuItem = styled.div`
font-size: 15px;
cursor: pointer; 
margin-left:25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}


`;

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left> <Language> EN </Language> <SearchContainer> <Input placeholder="search" /> <Search styled={{ color: "gray", fontSize: 16 }} />
                </SearchContainer></Left>
                <Center > <Logo> LAMA.</Logo> </Center>
                <Right >
                    <MenuItem>Register</MenuItem>
                    <MenuItem>SIGN IN </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>

            </Wrapper>

        </Container>
    )

}

export default Navbar