import { createTheme } from '@nextui-org/react';

const target_to_color = {
    "LLUF": "secondary",
    "MPA": "warning",
    "MDA": "primary"
}

const tool_to_color = {
    "Photoshop": "primary",
    "After Effects": "secondary",
    "Blender": "success",
    "React": "warning",
    "Figma": "error",
    "Canva": "primary",
    "Illustrator": "secondary"
}

const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors
            background: '#e3f5ff',
            hola: "red",
            "Photoshop": "blue",
            "After Effects": "blue",
            "Blender": "green",
            "React": "orange",
            "Figma": "red",
            "Canva": "yellow",
            "Illustrator": "pink"

            // ...  more colors
        },
        space: {},
        fonts: {}
    }
})

export { target_to_color, tool_to_color, theme }