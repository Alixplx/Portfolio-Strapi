import { KeyboardArrowUp } from "@mui/icons-material"
import { Fab, useScrollTrigger, Zoom } from "@mui/material"


const Scroll = () => {

  
    return (
    
        <Zoom in={useScrollTrigger()}>

            <Fab onClick={() => { scrollTo(0, 0) }} sx={{position: "fixed", right: 20, bottom: 100}} color="primary" aria-label="top" size="medium">

                <KeyboardArrowUp fontSize="medium" />
            </Fab>
        </Zoom>
    )
}

export default Scroll