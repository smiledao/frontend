<h1 align="center">
	<br>
	 :thought_balloon:
	<br>
	<br>
EZKL
	<br>
	<br>
	<br>
</h1>

> Easy Zero-Knowledge Inference

[![Test](https://github.com/zkonduit/ezkl/workflows/Rust/badge.svg)](https://github.com/zkonduit/ezkl/actions?query=workflow%3ARust)

`ezkl` is a library and command-line tool for doing inference for deep learning models and other computational graphs in a zk-snark (ZKML). It enables the following workflow:

1. Define a computational graph, for instance a neural network (but really any arbitrary set of operations), as you would normally in pytorch or tensorflow.
2. Export the final graph of operations as an [.onnx](https://onnx.ai/) file and some sample inputs to a `.json` file.
3. Point `ezkl` to the `.onnx` and `.json` files to generate a ZK-SNARK circuit with which you can prove statements such as:
> "I ran this publicly available neural network on some private data and it produced this output"

> "I ran my private neural network on some public data and it produced this output"

> "I correctly ran this publicly available neural network on some public data and it produced this output"

In the backend we use [Halo2](https://github.com/privacy-scaling-explorations/halo2) as a proof system.


- If you have any questions, we'd love for you to open up a discussion topic in [Discussions](https://github.com/zkonduit/ezkl/discussions). Alternatively, you can join the ✨[EZKL Community Telegram Group](https://t.me/+76OjHb5CwJtkMTBh)💫.


### resources 📖

|  |  |
| --- | --- |
| [docs](https://docs.ezkl.xyz ) | the official ezkl docs page |
| [tutorial](https://github.com/zkonduit/pyezkl/tree/main/examples/tutorial) | end-to-end tutorial using pytorch and ezkl |
| [notebook](https://github.com/zkonduit/pyezkl/blob/main/examples/ezkl_demo.ipynb) | end-to-end tutorial using pytorch and ezkl in a jupyter notebook |
| `cargo doc --open` | compile and open the docs in your default browser |


----------------------

## Getting Started ⚙️




https://user-images.githubusercontent.com/45801863/236771676-5bbbbfd1-ba6f-418a-902e-20738ce0e9f0.mp4


### building the project 🔨
Note that the library requires a nightly version of the rust toolchain. You can change the default toolchain by running:

```bash
rustup override set nightly
```

After which you may build the library

```bash
cargo build --release
```

A folder `./target/release` will be generated. Add this folder to your PATH environment variable to call `ezkl` from the CLI.

```bash
# For UNIX like systems
# in .bashrc, .bash_profile, or some other path file
export PATH="<replace with where you cloned the repo>/ezkl/target/release:$PATH"
```

Restart your shell or reload your shell settings

```bash
# example, replace .bash_profile with the file you use to configure your shell
source ~/.bash_profile
```

You will need a functioning installation of `solc` in order to run `ezkl` properly.
[solc-select](https://github.com/crytic/solc-select) is recommended.
Follow the instructions on [solc-select](https://github.com/crytic/solc-select) to activate `solc` in your environment.



### Repos

The EZKL project has several libraries and repos. 

| Repo | Description |
| --- | --- |
| [@zkonduit/ezkl](https://github.com/zkonduit/ezkl) | the main ezkl repo in rust |
| [@zkonduit/pyezkl](https://github.com/zkonduit/pyezkl) | helper functions in python for processing onnx files |
| [@zkonduit/ezkl-docs](https://github.com/zkonduit/ezkl-docs) | official ezkl docs |




----------------------

## Contributing 🌎

If you're interested in contributing and are unsure where to start, reach out to one of the maintainers:

* dante (alexander-camuto)
* jason (jasonmorton)

More broadly:

- See currently open issues for ideas on how to contribute.

- For PRs we use the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) naming convention.

- To report bugs or request new features [create a new issue within Issues](https://github.com/zkonduit/ezkl/issues) to inform the greater community.

