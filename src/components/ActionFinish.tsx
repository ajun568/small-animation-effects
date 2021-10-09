import React, { useEffect } from 'react';
import * as d3 from 'd3';

const ActionFinish: React.FC = () => {
  useEffect(() => {
    const width = 160;
    const height = 160;
    const r = width / 2;
    const d = width;
    const path = "M64,128 C28,128 0,98 0,64 C0,28 28,0 64,0 C98,0 128,28 128,64 C128,98 98,128 64,128 Z M56,90 L38,62 L26,72 C36,78 48,86 58,100 C66,86 88,56 100,54 C98,48 96,34 100,26 C76,42 56,80 56,80 L56,80 Z";
    const rectWidth = 92;
    const rectDistance = 34;
    const transformDistance = 16;
    const bgColor = 'rgb(44, 150, 120)';

    let svg = d3.select('#actionFinish')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
      
      svg.append('g')
        .attr('stroke', 'none')
        .attr('fill', 'none')
        .attr('class', 'tick')

      svg.selectAll('.tick')
        .append('circle')
        .attr('stroke', bgColor)
        .attr('class', 'cubic-bezier')
        .attr('stroke-dasharray', Math.PI * d)
        .attr('stroke-dashoffset', Math.PI * d)
        .attr('cx', r)
        .attr('cy', r)
        .attr('r', r)
        .attr('stroke-width', 3)
        .attr('opacity', 1)

      svg.selectAll('.tick')
        .append('g')
        .attr('fill', bgColor)
        .attr('transform', `translate(${transformDistance}, ${transformDistance})`)
        .attr('class', 'path')

      svg.selectAll('.path')
        .append('path')
        .attr('d', path)

      svg.selectAll('.tick')
        .append('rect')
        .attr('width', rectWidth)
        .attr('height', rectWidth)
        .attr('fill', bgColor)
        .attr('transform', `translate(${rectDistance}, ${rectDistance})`)
        .transition()
        .duration(400)
        .delay(1200)
        .ease(d3.easeLinear)
        .attr('width', 0)
        .attr('transform', `translate(${rectWidth + rectDistance}, ${rectDistance})`)
  }, [])

  return (
    <div id="actionFinish"></div>
  )
}

export default ActionFinish;
