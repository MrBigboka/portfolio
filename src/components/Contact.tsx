import React, { useRef, useEffect, useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Box,
    Snackbar,
    Alert,
    AlertColor,
} from "@mui/material";
import emailjs from "emailjs-com";
import "./styles/Contact.scss";

const Contact: React.FC<{ onInView: () => void }> = ({ onInView }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<
        AlertColor | undefined
    >("success");
    const [formErrors, setFormErrors] = useState({
        user_email: "",
        user_phone: "",
        user_name: "",
        user_firstname: "",
        message: "",
    });

    const validateField = (name: string, value: string) => {
        switch (name) {
            case "user_email":
                if (value === "") {
                    formErrors.user_email = "";
                } else {
                    const emailValid = value.match(
                        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                    );
                    formErrors.user_email = emailValid ? "" : "Email invalide";
                }
                break;
            case "user_phone":
                if (value === "" || value.match(/^\d{10,}$/)) {
                    formErrors.user_phone = "";
                } else {
                    formErrors.user_phone =
                        "Numéro doit contenir 10 chiffres ou plus";
                }
                break;
            // Autres cas de validation...
            default:
                break;
        }
        setFormErrors({ ...formErrors });
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        const isFormValid = Object.values(formErrors).every((x) => x === "");

        if (formRef.current) {
            if (formRef.current && isFormValid) {
                emailjs
                    .sendForm(
                        "service_7r3se5f",
                        "template_8q963tq",
                        formRef.current,
                        "KZl9M6BpEpzIVCX_u"
                    )
                    .then(
                        (result) => {
                            console.log(
                                "Email successfully sent!",
                                result.text
                            );
                            setSnackbarMessage("Message envoyé avec succès.");
                            setSnackbarSeverity("success");
                            setOpenSnackbar(true);
                        },
                        (error) => {
                            console.log("Failed to send email:", error.text);
                            setSnackbarMessage(
                                "Erreur lors de l'envoi du message."
                            );
                            setSnackbarSeverity("error");
                            setOpenSnackbar(true);
                        }
                    );
            } else {
                setSnackbarMessage(
                    "Veuillez remplir correctement tous les champs requis."
                );
                setSnackbarSeverity("error");
                setOpenSnackbar(true);
            }
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onInView();
                }
            },
            { threshold: 0.5 }
        );

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, [onInView, formRef]);

    return (
        <div ref={divRef} id="contact">
            <Typography variant="h2" component="h2" className="contact-title">
                CONTACT
            </Typography>
            <Typography
                style={{ color: "white", textAlign: "center" }}
                variant="subtitle1"
                className="distinction-description"
            >
                Laisser moi un message ! 💬
            </Typography>
            <Box
                component="form"
                ref={formRef}
                onSubmit={sendEmail}
                noValidate
                autoComplete="off"
                className="contact-form"
            >
                <TextField
                    label="Nom"
                    name="user_name"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    InputLabelProps={{ style: { color: "white" } }}
                    InputProps={{
                        style: { color: "white", borderColor: "white" },
                    }}
                />
                <TextField
                    label="Prénom"
                    name="user_firstname"
                    required
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ style: { color: "white" } }}
                    InputProps={{
                        style: { color: "white", borderColor: "white" },
                    }}
                />
                <TextField
                    label="Courriel"
                    name="user_email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{ style: { color: "white" } }}
                    InputProps={{
                        style: { color: "white", borderColor: "white" },
                    }}
                    onChange={(e) =>
                        validateField(e.target.name, e.target.value)
                    }
                    helperText={formErrors.user_email}
                    error={!!formErrors.user_email}
                />

                <TextField
                    label="Numéro de téléphone (facultatif)"
                    name="user_phone"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ style: { color: "white" } }}
                    InputProps={{
                        style: { color: "white", borderColor: "white" },
                    }}
                    onChange={(e) => {
                        const nonNumericChars = /[^0-9]/g;
                        const cleanedValue = e.target.value.replace(
                            nonNumericChars,
                            ""
                        );
                        e.target.value = cleanedValue;
                        validateField(e.target.name, cleanedValue);
                    }}
                    helperText={formErrors.user_phone}
                    error={!!formErrors.user_phone}
                />
                <TextField
                    required
                    label="Message"
                    name="message"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    InputLabelProps={{ style: { color: "white" } }}
                    InputProps={{
                        style: { color: "white", borderColor: "white" },
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="submit-button"
                >
                    Envoyer
                </Button>
            </Box>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert
                    onClose={() => setOpenSnackbar(false)}
                    severity={snackbarSeverity}
                    sx={{ width: "100%" }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Contact;
