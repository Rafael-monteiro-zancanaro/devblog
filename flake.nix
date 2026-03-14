{
  description = "Template de Flake para projeto Angular";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/release-25.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [
            nodejs_24
            nodePackages."@angular/cli"
            angular-language-server
          ];

          shellHook = ''
            echo "🚀 Ambiente Angular com Nix pronto!"

            # Instala as dependências sempre que entrar no shell
            echo "📦 Instalando dependências (Heroicons)..."
            npm install @dimaslz/ng-heroicons

            echo ""
            echo "✅ Dependências instaladas!"
            echo "👉 Rode 'ng serve' para iniciar o servidor"
          '';
        };
      }
    );
}
