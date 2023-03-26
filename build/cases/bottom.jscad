function plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[39.2482322,-12.9328211],[-7.6217272,-3.003817]]).appendArc([-10,-0.0689481],{"radius":3,"clockwise":true,"large":false}).appendPoint([-10,48.3234251]).appendArc([-7.9308523,51.1753567],{"radius":3,"clockwise":true,"large":false}).appendPoint([31.7305897,64.1206001]).appendArc([32.8707115,64.2613606],{"radius":3,"clockwise":true,"large":false}).appendPoint([49.9346407,63.0681344]).appendArc([50.5406242,62.9625451],{"radius":3,"clockwise":true,"large":false}).appendPoint([85.6580051,53.0461834]).appendArc([87.8263178,49.845495],{"radius":3,"clockwise":true,"large":false}).appendPoint([82.8080569,2.0999329]).appendArc([83.7083439,-0.3723444],{"radius":3,"clockwise":false,"large":false}).appendPoint([95.2738224,-11.5337878]).appendArc([95.5480183,-11.8371321],{"radius":3,"clockwise":true,"large":false}).appendPoint([107.8286185,-27.4413266]).appendArc([108.2117804,-28.0764642],{"radius":3,"clockwise":true,"large":false}).appendPoint([114.974286,-43.2653007]).appendArc([113.4538594,-47.2261468],{"radius":3,"clockwise":true,"large":false}).appendPoint([98.4909897,-53.8880456]).appendArc([97.3025218,-54.1472413],{"radius":3,"clockwise":true,"large":false}).appendPoint([73.7257399,-54.3967108]).appendArc([71.0663496,-52.8444502],{"radius":3,"clockwise":true,"large":false}).appendPoint([64.0419183,-40.0936218]).appendArc([63.6579347,-39.5497194],{"radius":3,"clockwise":false,"large":false}).appendPoint([40.8701698,-13.8762162]).appendArc([39.2482321,-12.9328211],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
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

        