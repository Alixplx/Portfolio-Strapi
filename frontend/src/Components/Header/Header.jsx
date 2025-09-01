import { Box, Container, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from '@mui/material'
import { useContext, useState } from 'react'
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material"
import { ColorModeContext } from '../../theme'
import NavBar from '../Navbar/NavBar'


const Header = () => {
    
    const colorMode = useContext(ColorModeContext)
    const theme = useTheme()    

    return (
    
        <Box sx={{bgcolor: "#2B3445", py: "12px", borderBottomRightRadius: 4, borderBottomLeftRadius: 4}}>

            <Container>

                <Stack direction={"row"} alignItems="center">

                    <Typography sx={{mr: 2, p: "4px 10px", bgcolor: "#D23F57",borderRadius: "12px", fontSize:{ sm:'body1', xs:'body2'},fontWeight: "bold",color: "#fff",}}>
                        My Folio
                    </Typography>

                    <Box flexGrow={1} />

                    <NavBar />

                    <div>
                    
                        {theme.palette.mode === "light" ? (
                            
                            <IconButton onClick={() => {

                                localStorage.setItem("mode", theme.palette.mode === "dark" ? "light" : "dark")
                                colorMode.toggleColorMode()
                            }}

                            color="inherit" >
                            
                            <DarkModeOutlined fontSize="small" sx={{color: "#fff"}} />
                            </IconButton>

                        ) : (
                            <IconButton onClick={() => {

                                localStorage.setItem("mode", theme.palette.mode === "dark" ? "light" : "dark")
                                colorMode.toggleColorMode()
                            }}

                            color="inherit">
                                
                            <LightModeOutlined fontSize="small" />
                            </IconButton>
                        )}

                    </div>

                </Stack>
            </Container>
            
        </Box>
    )
}

export default Header