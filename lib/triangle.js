
// Polygon
// A <polygon> is similar to a <polyline>, in that it is composed of straight line segments connecting a list of points. For polygons though, the path automatically connects the last point with the first, creating a closed shape.

// Note: A rectangle is a type of polygon, so a polygon can be used to create a <rect/> element that does not have rounded corners.

// <polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>

// points
// A list of points, each number separated by a space, comma, EOL, or a line feed character with additional whitespace permitted. Each point must contain two numbers: an x coordinate and a y coordinate. So, the list (0,0), (1,1), and (2,2) could be written as 0, 0 1, 1 2, 2. The drawing then closes the path, so a final straight line would be drawn from (2,2) to (0,0).