declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;

}
declare module "*.png"
// file that allows svg files to be imported as modules in typescripts