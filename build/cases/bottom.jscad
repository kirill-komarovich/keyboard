function plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[145.8441082,-122.2062716],[92.3344179,-110.0311527]]).appendArc([90,-107.1059176],{"radius":3,"clockwise":true,"large":false}).appendPoint([90,-58.6765749]).appendArc([92.0691477,-55.8246433],{"radius":3,"clockwise":true,"large":false}).appendPoint([131.7305897,-42.8793999]).appendArc([132.8707115,-42.7386394],{"radius":3,"clockwise":true,"large":false}).appendPoint([150.0294312,-43.938494]).appendArc([150.4524282,-43.9985697],{"radius":3,"clockwise":true,"large":false}).appendPoint([208.3426098,-56.4795802]).appendArc([210.6951774,-59.7134694],{"radius":3,"clockwise":true,"large":false}).appendPoint([205.828289,-107.9317442]).appendArc([206.8497056,-110.5012745],{"radius":3,"clockwise":false,"large":false}).appendPoint([216.1274506,-118.532148]).appendArc([216.42862,-122.7680553],{"radius":3,"clockwise":true,"large":false}).appendPoint([193.4808071,-149.1789116]).appendArc([189.3406094,-149.5526468],{"radius":3,"clockwise":true,"large":false}).appendPoint([177.9259145,-140.4086901]).appendArc([177.5372923,-140.14453],{"radius":3,"clockwise":false,"large":false}).appendPoint([146.6655146,-122.5259616]).appendArc([145.8441083,-122.2062716],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
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

        