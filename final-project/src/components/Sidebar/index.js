import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute 
} from './SidebarElements';

const Sidebar = ({isOpen, toggle }) => {
return (
    <SidebarContainer isOpen={isOpen} onCick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onCick={toggle}>About</SidebarLink>
                <SidebarLink to='discover' onCick={toggle}>Discover</SidebarLink>
                <SidebarLink to='services' onCick={toggle}>Services</SidebarLink>
                <SidebarLink to='signup' onCick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin' onCick={toggle}>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
)
}

export default Sidebar