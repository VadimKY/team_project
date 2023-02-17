import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import s from "./Button.module.css"

export default function ColorButtons() {

    function onButtonClickHandler() {
        return (
            window.alert('Есть Котакт !!!')
        );
    }

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={onButtonClickHandler} className={s.colorButton}>
                Добавить пост
            </Button>
        </Stack>
    );
}