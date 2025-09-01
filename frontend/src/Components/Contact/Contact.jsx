import { EmailOutlined } from '@mui/icons-material'
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import { useForm, ValidationError } from '@formspree/react'
import Lottie from "lottie-react";
import emailAnimation from "../../../public/assets/email.json"


const Contact = () => {
  
    const [state, handleSubmit] = useForm(`${import.meta.env.VITE_FORMSPREE_API}`)

    if (state.succeeded) {

        return (
            
            <Container>

                <Typography variant='h6' sx={{fontSize: {xs: "20px"}}}>Your Message Has Been Sent Successfulyy.</Typography>
            </Container>
        )
    }

    return (

        <Container>

            <Stack sx={{flexDirection: {xs: "column", lg: "row"}}} justifyContent={"space-between"} alignItems={"center"} gap={10}>

                <form onSubmit={handleSubmit} id='mainContact'>

                    <Stack direction={"column"}>

                        <Box display={"flex"} alignItems={"center"}>

                            <EmailOutlined />
                            <Typography sx={{mx: 3, fontSize: {xs: "20px"}}} variant='h2'>Contact Us</Typography>
                        </Box>

                        <Typography variant='body1' sx={{textTransform: "capitalize", my: 8, fontSize: {xs: "16px"}}}>
                            Contact Us For More Information and Get Notified When I Publish Something new.
                        </Typography>

                        <Box display={"flex"} alignItems={"center"}>

                            
                            <TextField autoComplete='off' required id="standard-basic" label="Email Address" name='email' variant="outlined" sx={{width: "80%"}} />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </Box>

                        <Box display={"flex"} alignItems={"center"} sx={{my: 4}}>

                            
                            <TextField required multiline rows={8} label="Your Message" name='message' variant="outlined" sx={{width: "100%"}} />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </Box>

                        <Button type='submit' disabled={state.submitting} variant='contained' sx={{fontSize: {xs: "12px", lg: "14px"} ,width: "20%", ":disabled": {opacity: 0.4, cursor: "not-allowed"}}}>

                            {state.submitting ? "Submiting..." : "Submit"}
                        </Button>

                    </Stack>
                </form>


               <Box sx={{marginLeft: 15}}>

                    <Lottie style={{height: 500}} animationData={emailAnimation} loop={true} />
               </Box>

            </Stack>
            
        </Container>
    )
}

export default Contact