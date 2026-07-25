#!/usr/bin/env python3
"""
Convertit une photo en portrait ASCII pour l'easter egg du site.

    pip install pillow
    python3 outils/photo-en-ascii.py ma-photo.jpg > src/data/portrait.txt

Conseils : une photo bien contrastée, cadrée serré sur le visage, fond clair
uni. Le résultat se juge en le regardant de loin, en plissant les yeux.
"""
import sys
from PIL import Image, ImageOps

# Du plus clair au plus sombre. Le premier caractère est un espace.
RAMPE = " .:-=+*#%@"
LARGEUR = 78
RATIO = 0.5  # un caractère est ~2x plus haut que large


def convertir(chemin: str, largeur: int = LARGEUR, inverser: bool = False) -> str:
    img = Image.open(chemin).convert("L")
    img = ImageOps.autocontrast(img)
    if inverser:
        img = ImageOps.invert(img)

    hauteur = max(1, int(img.height / img.width * largeur * RATIO))
    img = img.resize((largeur, hauteur), Image.LANCZOS)

    pas = 255 / (len(RAMPE) - 1)
    pixels = img.getdata()
    lignes = [
        "".join(RAMPE[min(len(RAMPE) - 1, int(p / pas))] for p in pixels[i * largeur:(i + 1) * largeur])
        for i in range(hauteur)
    ]
    return "\n".join(ligne.rstrip() for ligne in lignes)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit("usage: photo-en-ascii.py <image> [largeur] [--inverser]")
    largeur = int(sys.argv[2]) if len(sys.argv) > 2 and sys.argv[2].isdigit() else LARGEUR
    print(convertir(sys.argv[1], largeur, "--inverser" in sys.argv))
