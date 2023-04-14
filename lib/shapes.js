
//Circle
// The <circle> element draws a circle on the screen. It takes three basic parameters to determine the shape and size of the element.

// <circle cx="25" cy="75" r="20"/>

// r
// The radius of the circle.

// cx
// The x position of the center of the circle.

// cy
// The y position of the center of the circle.

// Rectangle
// The <rect> element draws a rectangle on the screen. There are six basic attributes that control the position and shape of the rectangles on screen. The one on the right has its rx and ry parameters set, giving it rounded corners. If they're not set, they default to 0.

// <rect x="10" y="10" width="30" height="30"/>
// <rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>

// x
// The x position of the top left corner of the rectangle.

// y
// The y position of the top left corner of the rectangle.

// width
// The width of the rectangle.

// height
// The height of the rectangle.

// rx
// The x radius of the corners of the rectangle.

// ry
// The y radius of the corners of the rectangle.


// Polygon
// A <polygon> is similar to a <polyline>, in that it is composed of straight line segments connecting a list of points. For polygons though, the path automatically connects the last point with the first, creating a closed shape.

// Note: A rectangle is a type of polygon, so a polygon can be used to create a <rect/> element that does not have rounded corners.

// <polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>

// points
// A list of points, each number separated by a space, comma, EOL, or a line feed character with additional whitespace permitted. Each point must contain two numbers: an x coordinate and a y coordinate. So, the list (0,0), (1,1), and (2,2) could be written as 0, 0 1, 1 2, 2. The drawing then closes the path, so a final straight line would be drawn from (2,2) to (0,0).