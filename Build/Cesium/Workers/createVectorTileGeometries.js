/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.98
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
define(["./Transforms-f305a473","./BoxGeometry-edfa05a1","./Matrix2-7dfd434a","./Color-75edef0e","./CylinderGeometry-c3ce44b9","./defaultValue-50f7432c","./EllipsoidGeometry-25d5714a","./IndexDatatype-ceed713e","./createTaskProcessorWorker","./ComponentDatatype-9b23164a","./WebGLConstants-58abc51a","./combine-8462e002","./RuntimeError-48e1f06d","./GeometryAttribute-4d82fade","./GeometryAttributes-8bab1b25","./GeometryOffsetAttribute-490bc2c9","./VertexFormat-fa0c27e8","./CylinderGeometryLibrary-8bcf1a43"],(function(e,t,n,r,a,i,o,s,d,c,l,f,u,h,b,p,y,x){"use strict";function g(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}const m=new n.Cartesian3,C=n.Matrix4.packedLength+n.Cartesian3.packedLength,I=n.Matrix4.packedLength+2,k=n.Matrix4.packedLength+n.Cartesian3.packedLength,M=n.Cartesian3.packedLength+1,B={modelMatrix:new n.Matrix4,boundingVolume:new e.BoundingSphere};function w(e,t){let r=t*C;const a=n.Cartesian3.unpack(e,r,m);r+=n.Cartesian3.packedLength;const i=n.Matrix4.unpack(e,r,B.modelMatrix);n.Matrix4.multiplyByScale(i,a,i);const o=B.boundingVolume;return n.Cartesian3.clone(n.Cartesian3.ZERO,o.center),o.radius=Math.sqrt(3),B}function A(e,t){let r=t*I;const a=e[r++],i=e[r++],o=n.Cartesian3.fromElements(a,a,i,m),s=n.Matrix4.unpack(e,r,B.modelMatrix);n.Matrix4.multiplyByScale(s,o,s);const d=B.boundingVolume;return n.Cartesian3.clone(n.Cartesian3.ZERO,d.center),d.radius=Math.sqrt(2),B}function O(e,t){let r=t*k;const a=n.Cartesian3.unpack(e,r,m);r+=n.Cartesian3.packedLength;const i=n.Matrix4.unpack(e,r,B.modelMatrix);n.Matrix4.multiplyByScale(i,a,i);const o=B.boundingVolume;return n.Cartesian3.clone(n.Cartesian3.ZERO,o.center),o.radius=1,B}function L(e,t){let r=t*M;const a=e[r++],i=n.Cartesian3.unpack(e,r,m),o=n.Matrix4.fromTranslation(i,B.modelMatrix);n.Matrix4.multiplyByUniformScale(o,a,o);const s=B.boundingVolume;return n.Cartesian3.clone(n.Cartesian3.ZERO,s.center),s.radius=1,B}const v=new n.Cartesian3;function E(t,a,o,s,d){if(!i.defined(a))return;const c=o.length,l=s.attributes.position.values,f=s.indices,u=t.positions,h=t.vertexBatchIds,b=t.indices,p=t.batchIds,y=t.batchTableColors,x=t.batchedIndices,m=t.indexOffsets,C=t.indexCounts,I=t.boundingVolumes,k=t.modelMatrix,M=t.center;let B=t.positionOffset,w=t.batchIdIndex,A=t.indexOffset;const O=t.batchedIndicesOffset;for(let t=0;t<c;++t){const i=d(a,t),s=i.modelMatrix;n.Matrix4.multiply(k,s,s);const c=o[t],L=l.length;for(let e=0;e<L;e+=3){const t=n.Cartesian3.unpack(l,e,v);n.Matrix4.multiplyByPoint(s,t,t),n.Cartesian3.subtract(t,M,t),n.Cartesian3.pack(t,u,3*B+e),h[w++]=c}const E=f.length;for(let e=0;e<E;++e)b[A+e]=f[e]+B;const U=t+O;x[U]=new g({offset:A,count:E,color:r.Color.fromRgba(y[c]),batchIds:[c]}),p[U]=c,m[U]=A,C[U]=E,I[U]=e.BoundingSphere.transform(i.boundingVolume,s),B+=L/3,A+=E}t.positionOffset=B,t.batchIdIndex=w,t.indexOffset=A,t.batchedIndicesOffset+=c}const U=new n.Cartesian3,G=new n.Matrix4;function S(t,n,a){const i=a.length,o=2+i*e.BoundingSphere.packedLength+1+function(e){const t=e.length;let n=0;for(let a=0;a<t;++a)n+=r.Color.packedLength+3+e[a].batchIds.length;return n}(n),s=new Float64Array(o);let d=0;s[d++]=t,s[d++]=i;for(let t=0;t<i;++t)e.BoundingSphere.pack(a[t],s,d),d+=e.BoundingSphere.packedLength;const c=n.length;s[d++]=c;for(let e=0;e<c;++e){const t=n[e];r.Color.pack(t.color,s,d),d+=r.Color.packedLength,s[d++]=t.offset,s[d++]=t.count;const a=t.batchIds,i=a.length;s[d++]=i;for(let e=0;e<i;++e)s[d++]=a[e]}return s}return d((function(e,r){const d=i.defined(e.boxes)?new Float32Array(e.boxes):void 0,c=i.defined(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,l=i.defined(e.cylinders)?new Float32Array(e.cylinders):void 0,f=i.defined(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,u=i.defined(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,h=i.defined(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,b=i.defined(e.spheres)?new Float32Array(e.spheres):void 0,p=i.defined(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,y=i.defined(d)?c.length:0,x=i.defined(l)?f.length:0,g=i.defined(u)?h.length:0,m=i.defined(b)?p.length:0,C=t.BoxGeometry.getUnitBox(),I=a.CylinderGeometry.getUnitCylinder(),k=o.EllipsoidGeometry.getUnitEllipsoid(),M=C.attributes.position.values,B=I.attributes.position.values,v=k.attributes.position.values;let V=M.length*y;V+=B.length*x,V+=v.length*(g+m);const T=C.indices,F=I.indices,R=k.indices;let Z=T.length*y;Z+=F.length*x,Z+=R.length*(g+m);const D=new Float32Array(V),P=new Uint16Array(V/3),q=s.IndexDatatype.createTypedArray(V/3,Z),W=y+x+g+m,_=new Uint16Array(W),N=new Array(W),Y=new Uint32Array(W),j=new Uint32Array(W),z=new Array(W);!function(e){const t=new Float64Array(e);let r=0;n.Cartesian3.unpack(t,r,U),r+=n.Cartesian3.packedLength,n.Matrix4.unpack(t,r,G)}(e.packedBuffer);const H={batchTableColors:new Uint32Array(e.batchTableColors),positions:D,vertexBatchIds:P,indices:q,batchIds:_,batchedIndices:N,indexOffsets:Y,indexCounts:j,boundingVolumes:z,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:G,center:U};E(H,d,c,C,w),E(H,l,f,I,A),E(H,u,h,k,O),E(H,b,p,k,L);const J=S(q.BYTES_PER_ELEMENT,N,z);return r.push(D.buffer,P.buffer,q.buffer),r.push(_.buffer,Y.buffer,j.buffer),r.push(J.buffer),{positions:D.buffer,vertexBatchIds:P.buffer,indices:q.buffer,indexOffsets:Y.buffer,indexCounts:j.buffer,batchIds:_.buffer,packedBuffer:J.buffer}}))}));
