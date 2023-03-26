function switch_plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[39.2482322,-12.9328211],[-7.6217272,-3.003817]]).appendArc([-10,-0.0689481],{"radius":3,"clockwise":true,"large":false}).appendPoint([-10,48.3234251]).appendArc([-7.9308523,51.1753567],{"radius":3,"clockwise":true,"large":false}).appendPoint([31.7305897,64.1206001]).appendArc([32.8707115,64.2613606],{"radius":3,"clockwise":true,"large":false}).appendPoint([49.9346407,63.0681344]).appendArc([50.5406242,62.9625451],{"radius":3,"clockwise":true,"large":false}).appendPoint([85.6580051,53.0461834]).appendArc([87.8263178,49.845495],{"radius":3,"clockwise":true,"large":false}).appendPoint([82.8080569,2.0999329]).appendArc([83.7083439,-0.3723444],{"radius":3,"clockwise":false,"large":false}).appendPoint([95.2738224,-11.5337878]).appendArc([95.5480183,-11.8371321],{"radius":3,"clockwise":true,"large":false}).appendPoint([107.8286185,-27.4413266]).appendArc([108.2117804,-28.0764642],{"radius":3,"clockwise":true,"large":false}).appendPoint([114.974286,-43.2653007]).appendArc([113.4538594,-47.2261468],{"radius":3,"clockwise":true,"large":false}).appendPoint([98.4909897,-53.8880456]).appendArc([97.3025218,-54.1472413],{"radius":3,"clockwise":true,"large":false}).appendPoint([73.7257399,-54.3967108]).appendArc([71.0663496,-52.8444502],{"radius":3,"clockwise":true,"large":false}).appendPoint([64.0419183,-40.0936218]).appendArc([63.6579347,-39.5497194],{"radius":3,"clockwise":false,"large":false}).appendPoint([40.8701698,-13.8762162]).appendArc([39.2482321,-12.9328211],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[31.5998431,47.3087161],[46.5633038,46.262369]]).appendPoint([47.6096509,61.2258297]).appendPoint([32.6461902,62.2721768]).appendPoint([31.5998431,47.3087161]).close().innerToCAG()
.union(
    new CSG.Path2D([[29.2281229,13.3915383],[44.1915836,12.3451912]]).appendPoint([45.2379307,27.3086519]).appendPoint([30.27447,28.354999]).appendPoint([29.2281229,13.3915383]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.413983,30.3501272],[45.3774437,29.3037801]]).appendPoint([46.4237908,44.2672408]).appendPoint([31.4603301,45.3135879]).appendPoint([30.413983,30.3501272]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.9094115,37.2816691],[83.8272399,35.7137421]]).appendPoint([85.3951669,50.6315705]).appendPoint([70.4773385,52.1994975]).appendPoint([68.9094115,37.2816691]).close().innerToCAG()
).union(
    new CSG.Path2D([[67.1324276,20.3747969],[82.050256,18.8068699]]).appendPoint([83.618183,33.7246983]).appendPoint([68.7003546,35.2926253]).appendPoint([67.1324276,20.3747969]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.3554437,3.4679247],[80.2732721,1.8999977]]).appendPoint([81.8411991,16.8178261]).appendPoint([66.9233707,18.3857531]).appendPoint([65.3554437,3.4679247]).close().innerToCAG()
).union(
    new CSG.Path2D([[48.7337726,22.3085735],[63.651601,20.7406465]]).appendPoint([65.219528,35.6584749]).appendPoint([50.3016996,37.2264019]).appendPoint([48.7337726,22.3085735]).close().innerToCAG()
).union(
    new CSG.Path2D([[50.5107565,39.2154457],[65.4285849,37.6475187]]).appendPoint([66.9965119,52.5653471]).appendPoint([52.0786835,54.1332741]).appendPoint([50.5107565,39.2154457]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.9567887,5.4017013],[61.8746171,3.8337743]]).appendPoint([63.4425441,18.7516027]).appendPoint([48.5247157,20.3195297]).appendPoint([46.9567887,5.4017013]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.336114,23.7559591],[26.3269764,23.2324667]]).appendPoint([26.8504688,38.2233291]).appendPoint([11.8596064,38.7468215]).appendPoint([11.336114,23.7559591]).close().innerToCAG()
).union(
    new CSG.Path2D([[10.7428226,6.766315],[25.733685,6.2428226]]).appendPoint([26.2571774,21.233685]).appendPoint([11.266315,21.7571774]).appendPoint([10.7428226,6.766315]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.9294054,40.7456032],[26.9202678,40.2221108]]).appendPoint([27.4437602,55.2129732]).appendPoint([12.4528978,55.7364656]).appendPoint([11.9294054,40.7456032]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,33.5],[7.5,33.5]]).appendPoint([7.5,48.5]).appendPoint([-7.5,48.5]).appendPoint([-7.5,33.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,16.5],[7.5,16.5]]).appendPoint([7.5,31.5]).appendPoint([-7.5,31.5]).appendPoint([-7.5,16.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,-0.5],[7.5,-0.5]]).appendPoint([7.5,14.5]).appendPoint([-7.5,14.5]).appendPoint([-7.5,-0.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[54.1922648,-2.4196752],[43.4021678,-12.8395508]]).appendPoint([53.8220434,-23.6296478]).appendPoint([64.6121404,-13.2097722]).appendPoint([54.1922648,-2.4196752]).close().innerToCAG()
).union(
    new CSG.Path2D([[79.7771687,-1.2311083],[68.9870717,-11.6509839]]).appendPoint([79.4069473,-22.4410809]).appendPoint([90.1970443,-12.0212053]).appendPoint([79.7771687,-1.2311083]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.882169,-15.9207192],[56.4466054,-24.3086128]]).appendPoint([64.834499,-36.7441764]).appendPoint([77.2700626,-28.3562828]).appendPoint([68.882169,-15.9207192]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.4670729,-14.7321523],[82.0315093,-23.1200459]]).appendPoint([90.4194029,-35.5556095]).appendPoint([102.8549665,-27.1677159]).appendPoint([94.4670729,-14.7321523]).close().innerToCAG()
).union(
    new CSG.Path2D([[81.0044688,-31.7675271],[67.3012869,-37.8685768]]).appendPoint([73.4023366,-51.5717587]).appendPoint([87.1055185,-45.470709]).appendPoint([81.0044688,-31.7675271]).close().innerToCAG()
).union(
    new CSG.Path2D([[106.5893727,-30.5789602],[92.8861908,-36.6800099]]).appendPoint([98.9872405,-50.3831918]).appendPoint([112.6904224,-44.2821421]).appendPoint([106.5893727,-30.5789602]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function switchplate_case_fn() {
                    

                // creating part 0 of case switchplate
                let switchplate__part_0 = switch_plate_extrude_1_outline_fn();

                // make sure that rotations are relative
                let switchplate__part_0_bounds = switchplate__part_0.getBounds();
                let switchplate__part_0_x = switchplate__part_0_bounds[0].x + (switchplate__part_0_bounds[1].x - switchplate__part_0_bounds[0].x) / 2
                let switchplate__part_0_y = switchplate__part_0_bounds[0].y + (switchplate__part_0_bounds[1].y - switchplate__part_0_bounds[0].y) / 2
                switchplate__part_0 = translate([-switchplate__part_0_x, -switchplate__part_0_y, 0], switchplate__part_0);
                switchplate__part_0 = rotate([0,0,0], switchplate__part_0);
                switchplate__part_0 = translate([switchplate__part_0_x, switchplate__part_0_y, 0], switchplate__part_0);

                switchplate__part_0 = translate([0,0,0], switchplate__part_0);
                let result = switchplate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchplate_case_fn();
            }

        