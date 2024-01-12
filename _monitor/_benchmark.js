/**
 * MEMORY USAGE TOOL
 */
const formatMemoryUsage = (data) => `${Math.round(data / 1024 / 1024 * 100) / 100} MB`;

function memoryUsageReport(memoryData) {
    console.log('######################################');
    console.log('Memory Statuses: ');

    console.log({
        rss: `${formatMemoryUsage(memoryData.rss)} -> Resident Set Size - total memory allocated for the process execution`,
        heapTotal: `${formatMemoryUsage(memoryData.heapTotal)} -> total size of the allocated heap`,
        heapUsed: `${formatMemoryUsage(memoryData.heapUsed)} -> actual memory used during the execution`,
        external: `${formatMemoryUsage(memoryData.external)} -> V8 external memory`,
    });

    console.log('######################################');
}


/**
 * CPU USAGE TOOL
 */
const formatCPUTime = (data) => `${data / 1000} ms`;

function cpuTimeReport(cpuData) {
    console.log('######################################');
    console.log('CPU Times: ');

    console.log({
        user: formatCPUTime(cpuData.user),
        system: formatCPUTime(cpuData.system)
    });

    console.log('######################################');
}

module.exports = {
    memoryUsageReport,
    cpuTimeReport,
};