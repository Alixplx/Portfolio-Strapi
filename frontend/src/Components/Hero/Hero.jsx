import { Box, Button, Container, IconButton, Typography } from "@mui/material"
import myPhoto from "../../../public/images/photo.png"
import {GitHub, LinkedIn} from "@mui/icons-material"
import myCV from "../../../public/assets/cv.pdf"


const Hero = () => {

    const scrollContact = () => {

        const element = document.getElementById("mainContact")
        element?.scrollIntoView()
    }

    return (
    
        <Container>

            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} sx={{flexDirection: {xs: "column" ,lg: "row"}}}>

                
                <img src={myPhoto} alt="PortFolio Image" className="portfolio_image" style={{marginTop: "120px"}} />
                
                <div id="heroSection" style={{textAlign: "center", marginTop: "120px"}}>

                    <Typography variant="h2" sx={{textTransform: "capitalize", fontSize: {xs: 25, lg: 50}}}>Hi I'm Ali</Typography>
                    <Typography variant="h4" sx={{mt: 2, textTransform: "capitalize", fontSize: {xs: 25, lg: 50}}}>front end developer</Typography>

                    <Box sx={{mt: 4}}>

                        <Button variant="contained"> <a href={myCV} download="cv" style={{textDecoration: "none"}}>Download CV</a> </Button>
                        <Button variant="outlined" sx={{mx: 4}} onClick={scrollContact}>Contact Me</Button>
                    </Box>

                    <IconButton target="_blank" rel="noopener" href="https://github.com/Alixplx" sx={{'&:hover': {background: "transparent"}}}>

                        <GitHub sx={{fontSize: "25px", mx: 1, my: 4}} />
                    </IconButton>

                    <IconButton target="_blank" rel="noopener" href="https://linkedin.com/in/ali-abdulrahman-8b8552325" sx={{'&:hover': {background: "transparent"}}}>

                        <LinkedIn sx={{fontSize: "25px",  my: 4}} />
                    </IconButton>

                </div>
            </Box>
            
        </Container>
    )
}

export default Hero