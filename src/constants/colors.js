import { createTheme } from '@nextui-org/react';

const tool_to_color = {
    "Photoshop": "Photoshop",
    "After Effects": "AfterEffects",
    "Blender": "Blender",
    "React": "React",
    "Figma": "Figma",
    "Canva": "Canva",
    "Illustrator": "Illustrator"
}

const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors
            background: '#e3f5ff',
            hola: "red",
            "Photoshop": "#185acc",
            "AfterEffects": "#7518cc",
            "Blender": "#cc9018",
            "React": "#18aecc",
            "Figma": "#cc5a18",
            "Canva": "yellow",
            "Illustrator": "pink",
            "LLUF": "#5E2BFF",
            "MPA": "#C65B7C",
            "MDA": "#048A81"

            // ...  more colors
        },
        space: {},
        fonts: {}
    }
})

export { tool_to_color, theme }