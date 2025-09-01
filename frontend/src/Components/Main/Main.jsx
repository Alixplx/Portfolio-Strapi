import { OpenInNew } from "@mui/icons-material"
import { Box, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, IconButton, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import { useGetProjectByNameQuery } from "../redux/project"
import { AnimatePresence, motion } from "framer-motion"


const Main = () => {
  
    const allProjectsAPI = "projects?populate=*"
    const reactCategoryAPI = "projects?populate=*&filters[category][$eq]=react"
    const jsCategoryAPI = "projects?populate=*&filters[category][$eq]=javascript"
    const htmlcssCategoryAPI = "projects?populate=*&filters[category][$eq]=htmlcss"

    const [category, setCategory] = useState(allProjectsAPI)
    const theme = useTheme()

    const handleAlignment = (event, newValue) => {

        if (newValue !== null) {

            setCategory(newValue)
        }
    }

    const {data, error, isLoading} = useGetProjectByNameQuery(category)

    if (isLoading) {

        return (

            <Container sx={{py: 10, textAlign: "center"}}>

                <CircularProgress />
            </Container>
        )
    }

    if (error) {

        return (

            <Container sx={{py: 10, textAlign: "center"}}>

                <Typography variant="h6" sx={{fontSize:{ xs:'20px', sm:'30px'}}}>{error.error}</Typography>
                <Typography variant="h5" sx={{fontSize:{ xs:'20px', sm:'30px'}}}>Please Try Again Later</Typography>
            </Container>
        )
    }

    if (data) {

        return (
    
            <Container>

                <div id="mainSection"></div>

                <Stack flexWrap={"wrap"} direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={4} mt={8}>

                    <Box>

                        <Typography variant="h6">Front End Projects</Typography>
                        <Typography fontWeight={300} variant="body1" sx={{mt:{xs: 4}}}>All My Projects Are Here, You Can Choose & View Any One Of Them</Typography>
                    </Box>

                    <ToggleButtonGroup value={category} exclusive onChange={handleAlignment} aria-label="text alignment"
                        sx={{".Mui-selected": {border: "1px solid rgba(233, 69, 96, 0.5) !important", color: "#e94560", backgroundColor: "initial"} ,gap: 1 }}>

                        <ToggleButton sx={{color: theme.palette.text.primary, height:{xs: "45px"}}} className="myButton" value={allProjectsAPI} aria-label="left aligned">All Projects</ToggleButton>
                        <ToggleButton sx={{color: theme.palette.text.primary, height:{xs: "45px"}}} className="myButton" value={reactCategoryAPI} aria-label="centered">React js</ToggleButton>
                        <ToggleButton sx={{color: theme.palette.text.primary, height:{xs: "45px"}}} className="myButton" value={jsCategoryAPI} aria-label="right aligned">JavaScript</ToggleButton>
                        <ToggleButton sx={{color: theme.palette.text.primary, height:{xs: "45px"}}} className="myButton" value={htmlcssCategoryAPI} aria-label="justified">HTML & CSS</ToggleButton>
                    </ToggleButtonGroup>

                </Stack>


                <Stack mt={10} direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>

                    <AnimatePresence>

                        {

                            data.data.map((item) => {

                                return (

                                    <Card component={motion.section} layout initial={{transform: "scale(0)"}} animate={{transform: "scale(1)"}}
                                        transition={{duration: 1.5, type: "spring", stiffness: 50}} key={item.id} 
                                        sx={{maxHeight: {xs: 470} ,maxWidth: {xs: 300, lg: 350} ,":hover .MuiCardMedia-root": {scale: "1.1", transition: "0.3s" }}}>

                                        <CardMedia sx={{height: {xs: 250, lg: 280}}} image={item.projectImage.url} />

                                        <CardContent>

                                            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                                
                                                <Typography sx={{fontSize: {xs: "20px"}}} gutterBottom variant="h5" component="div">{item.projectTitle}</Typography>
                                            </Stack>
                                            
                                            <Typography sx={{fontSize: {xs: "14px"}}} variant="body2" color="text.secondary">{item.projectDescription}</Typography>
                                        </CardContent>

                                        <CardActions sx={{justifyContent: "space-between"}}>

                                            <IconButton href={item.projectUrl} target="_blank" rel="noopener" sx={{textAlign: "center" ,display: "flex", alignItems: "center", 
                                                    width: {xs: "70%", lg: "100%"}, fontSize: {xs: "18px"} ,textTransform: "capitalize", "&:hover": {background: "transparent"}}}>
                                                                
                                                <OpenInNew sx={{mx: 1, fontSize: {xs: "14px"}}} />
                                                View Project
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                )
                            })
                        }

                    </AnimatePresence>

                </Stack>
            
            </Container>
        )
    }
}

export default Main