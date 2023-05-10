function plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[45.8441082,-15.2062716],[-7.6655821,-3.0311527]]).appendArc([-10,-0.1059176],{"radius":3,"clockwise":true,"large":false}).appendPoint([-10,48.3234251]).appendArc([-7.9308523,51.1753567],{"radius":3,"clockwise":true,"large":false}).appendPoint([31.7305897,64.1206001]).appendArc([32.8707115,64.2613606],{"radius":3,"clockwise":true,"large":false}).appendPoint([50.0294312,63.061506]).appendArc([50.4524282,63.0014303],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.3426098,50.5204198]).appendArc([110.6951774,47.2865306],{"radius":3,"clockwise":true,"large":false}).appendPoint([105.828289,-0.9317442]).appendArc([106.8497056,-3.5012745],{"radius":3,"clockwise":false,"large":false}).appendPoint([116.1274506,-11.532148]).appendArc([116.42862,-15.7680553],{"radius":3,"clockwise":true,"large":false}).appendPoint([93.4808071,-42.1789116]).appendArc([89.3406094,-42.5526468],{"radius":3,"clockwise":true,"large":false}).appendPoint([77.9259145,-33.4086901]).appendArc([77.5372923,-33.14453],{"radius":3,"clockwise":false,"large":false}).appendPoint([46.6655146,-15.5259616]).appendArc([45.8441083,-15.2062716],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = plate_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        