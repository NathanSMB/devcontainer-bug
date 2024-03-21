# Devcontainer HMR Bug

Currently when I update my code the change reflects briefly before reverting.

[Animated gif demonstrating the bug](hmr-being-weird.gif)

## About this repository

This is a minimal setup to reproduce the bug. This is a solidstart project freshly initialized. I have added a devcontainer configuration that hosts 2 containers. The first container being the working container which can be setup with all the CLI tools you may need to do your work. The second container is the SolidStart app itself running in dev mode. I have the source code mounted as a volume and have configured SolidStart to use polling since FS events won't fire when the volume updates.
